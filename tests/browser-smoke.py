#!/usr/bin/env python3
"""Smoke real del sitio INCOTIC; sin enviar mensajes, correos ni datos externos."""
from urllib.parse import urljoin
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765/"
SLUGS = (
    "infraestructura-ti", "redes-y-conectividad", "seguridad-electronica",
    "automatizacion", "domotica", "inteligencia-artificial", "informatica",
)

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True, args=["--no-sandbox"])
    page = browser.new_page(viewport={"width": 390, "height": 844})
    problems = []
    page.on("pageerror", lambda error: problems.append(str(error)))

    def check_no_horizontal_overflow(route):
        for width in (320, 390, 768, 1280):
            page.set_viewport_size({"width": width, "height": 844})
            overflow = page.evaluate("document.documentElement.scrollWidth - window.innerWidth")
            assert overflow <= 2, (route, width, overflow)

    home = page.goto(BASE, wait_until="domcontentloaded", timeout=45000)
    assert home and home.status == 200
    assert page.locator("main h1").count() == 1
    assert page.locator("a[href*='wa.me/']").count() >= 1
    assert page.locator("a[href^='tel:']").count() >= 1
    check_no_horizontal_overflow("portada")

    page.set_viewport_size({"width": 390, "height": 844})
    menu = page.locator("#navToggle")
    assert menu.get_attribute("aria-controls") == "navMobile"
    menu.click()
    assert menu.get_attribute("aria-expanded") == "true", "Menú móvil debe anunciar apertura"
    assert page.locator("#navMobile").is_visible()
    page.locator("#navMobile a[href='#soluciones']").click()
    assert menu.get_attribute("aria-expanded") == "false", "Menú móvil debe cerrar al navegar"

    legal = page.locator("button.footer-modal-action").first
    legal.scroll_into_view_if_needed()
    legal.focus()
    legal.press("Enter")
    dialog = page.get_by_role("dialog")
    assert dialog.count() == 1 and dialog.is_visible()
    assert dialog.get_attribute("aria-labelledby") == "incotic-modal-title"
    assert dialog.get_by_role("heading").count() == 1
    dialog.get_by_role("button", name="Cerrar").press("Escape")
    assert dialog.count() == 0
    assert legal.evaluate("(element) => element === document.activeElement"), "Restaurar foco"

    for slug in SLUGS:
        route = "servicios/" + slug + ".html"
        response = page.goto(urljoin(BASE, route), wait_until="domcontentloaded", timeout=45000)
        assert response and response.status == 200, route
        assert page.locator("main").count() == 1, route
        assert page.locator("h1").count() == 1, route
        assert page.title().strip(), route
        assert page.locator("meta[name='description']").get_attribute("content").strip(), route
        assert page.locator("link[rel='canonical']").get_attribute("href").endswith("/" + route), route
        assert page.locator("a[href*='wa.me/']").count() >= 1, route
        assert page.locator("a[href^='tel:']").count() >= 1, route
        check_no_horizontal_overflow(route)

    assert not problems, ("Errores JavaScript", problems)
    print("INCOTIC: 8 rutas, CTA, teclado/dialogo, menú móvil, SEO y anchos 320–1280 px verificados.")
    browser.close()
