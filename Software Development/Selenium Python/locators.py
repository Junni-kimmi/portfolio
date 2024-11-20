from selenium.webdriver.common.by import By

"""Services Selenium locators examples"""


class CommonLocators:
    TEST_SUCCESS_BUTTON = (By.CLASS_NAME, "testing__success-button")
    TEST_ERROR_BUTTON = (By.CLASS_NAME, "testing__error-button")
    TEST_WARNING_BUTTON = (By.CLASS_NAME, "testing__warning-button")
    SUCCESS_DIALOG = (By.CLASS_NAME, "message-box-success")
    SUCCESS_BTN = (By.CLASS_NAME, "button-success")
    WARNING_DIALOG = (By.CLASS_NAME, "message-box-warning")
    WARNING_BTN = (By.CLASS_NAME, "button-warning")
    ERROR_DIALOG = (By.CLASS_NAME, "message-box-error")
    ERROR_BTN = (By.CLASS_NAME, "button-error")
    


class ThemesLocators:
    
    ICONS_IMAGE = (By.XPATH, "//div[contains(@class, 'breadcrumb') ]//img")
    ARROW_DOWN = (By.CLASS_NAME, "icon-arrow_down")
    ARROW_UP = (By.CLASS_NAME, "icon-arrow_up")
    LOGO_IMAGE = (By.XPATH, "//div[contains(@class,'logo')]//img")
    LIGHT_ICON = (
        By.XPATH,
        "//div[contains(@style, 'margin') and .//label[contains(@for, 'light')]]//img",
    )
    DARK_ICON_LAYER = (
        By.XPATH,
        ".//div[contains(@style, 'margin') and .//label[contains(@for, 'dark')]]",
    )
    DARK_ICON = (
        By.XPATH,
        ".//div[contains(@style, 'margin') and .//label[contains(@for, 'dark')]]//img",
    )
    COLORS_SELECTOR_INPUT = (
        By.XPATH,
        "//div[contains(@class,'themes-color-selector')]//input",
    )
    FONT_SELECTOR = (By.XPATH, "//div[@namespace='font-type' ]/select")
    IMAGE_WRAPPER = (By.CLASS_NAME, "hive-drop-image-wrapper")
    FIRST_BREADCRUMB_IN_PREVIEW = (
        By.XPATH,
        "//div[contains(@class, 'hive-scrolling') ]//div[contains(@class, 'show-sub') ]//div[contains(@class, 'breadcrumb-01')]",
    )
    SECOND_BREADCRUMB_IN_PREVIEW = (
        By.XPATH,
        "//div[contains(@class, 'hive-scrolling') ]//div[contains(@class, 'show-sub') ]//div[@class='breadcrumb']",
    )
    TEST_TEXT_IN_PREVIEW = (
        By.XPATH,
        "//p[@class='head-object-name' and contains(., 'Test')]",
    )
