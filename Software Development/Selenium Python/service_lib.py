import time

from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.common.by import By
from lib.services_core import BaseObjectPage
from lib.locators import (
    OverviewPageLocators,
    DetailPageLocators,
)


class OverviewPage(BaseObjectPage):
    @property
    def locators(self):
        return OverviewPageLocators()

    def upload_pdf_file(self, file_path):
        ''' Upload pdf file '''
        self.upload_file(
            self.locators.UPLOAD_FILE_BTN, file_path, upload_timeout=60
        )
        self.check_dialog_box(self.service_utils.common_locators.SUCCESS_DIALOG)
        self.service_utils.click_at_element(self.locators.OK_BUTTON)
        self.service_utils.wait_while_service_is_loading()
        ''' Check preview element in detail page'''
        self._check_preview_canvas()

    def _check_preview_canvas(self):
        self.service_utils.switch_to_detail_page()
        assert self.service_utils.is_element_available(
            self.locators.PREVIEW_CANVAS
        ), self.service_utils.logger.error("Preview does not appear")


class DetailPage(BaseObjectPage):
    @property
    def locators(self):
        return DetailPageLocators()
