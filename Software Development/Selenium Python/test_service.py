import time
import unittest
import pytest
import os
from datetime import datetime

from parameterized import parameterized
from selenium.webdriver.common.by import By

from lib.config import TestConfig
from lib.locators import ObjectLocators
from lib.selenium_service_lib import SvcUtils
from lib.data_models import Languages
from lib.services_core import ObjectAdder, BaseObjectPage, SvcObjectEditor
from lib.decorators import screenshot_on_fail

from tests.service_lib import OverviewPage, DetailPage


class BaseTestCase(unittest.TestCase):
    headless = False
    config = TestConfig(host_index=0)
    svc_name = "service"


@screenshot_on_fail(folder="service_name")
class ViewService(BaseTestCase):
    def setUp(self):
        self.service_utils = SvcUtils(
            self.config.host_url,
            self.svc_name,
            username=self.config.username,
            password=self.config.password,
            headless=self.headless,
        )
        self.object_editor = ObjectEditor(self.service_utils)

    def tearDown(self):
        self.service_utils.close_browser()

    def test_td_uc01_01_view_page(self):
        self.object_editor.open_svc_page()


@screenshot_on_fail(folder="service_name")
class CreateObject(BaseTestCase):
    def setUp(self):
        self.service_utils = SvcUtils(
            self.config.host_url,
            self.svc_name,
            username=self.config.username,
            password=self.config.password,
            headless=self.headless,
        )
        self.object_name = self.service_utils.create_unique_object_name("svc-test")
        self.object_editor = SvcObjectEditor(self.service_utils)
        self.object_editor.open_svc_page()
        self.service_utils.create_new_object()
        self.service_utils.enter_object_name(self.object_name)
        self.service_utils.wait_while_service_is_loading()
        self.service_utils.close_object_page()

    def tearDown(self):
        self.service_utils.close_browser()

    def test_td_uc02_01_create_new_object(self):
        self.service_utils.filter_objects_list(self.object_name)


@screenshot_on_fail(folder="service_name")
class ViewObjectPages(BaseTestCase):
    def setUp(self):
        self.service_utils = SvcUtils(
            self.config.host_url,
            self.svc_name,
            username=self.config.username,
            password=self.config.password,
            headless=self.headless,
        )
        self.object_editor = SvcObjectEditor(self.service_utils)
        self.object_editor.open_svc_page()

    def tearDown(self):
        self.service_utils.close_browser()

    def test_td_uc03_01_view_objects_list_page(self):
        # Create Object 1
        object_name_1 = self.service_utils.create_unique_object_name("File01")
        self.service_utils.create_new_object()
        self.service_utils.enter_object_name(object_name_1)
        self.service_utils.wait_while_service_is_loading()
        self.service_utils.close_object_page()
        # Create Object 2
        object_name_2 = self.service_utils.create_unique_object_name("File02")
        self.service_utils.create_new_object()
        self.service_utils.enter_object_name(object_name_2)
        self.service_utils.wait_while_service_is_loading()
        self.service_utils.close_object_page()
        # Check objects
        self.service_utils.filter_objects_list(object_name_1)
        self.service_utils.filter_objects_list(object_name_2)


@screenshot_on_fail(folder="service_name")
class UploadFileToAnalyze(BaseTestCase):
    def setUp(self):
        self.file_folder = os.path.join(self.config.DATA_PATH, "test")
        self.service_utils = SvcUtils(
            self.config.host_url,
            self.svc_name,
            username=self.config.username,
            password=self.config.password,
            headless=self.headless,
        )
        self.overview_page = OverviewPage(self.service_utils)
        self.overview_page.open_svc_page()
        self.object_name = self.service_utils.create_unique_object_name("upload-test")
        self.service_utils.create_new_object()
        self.service_utils.enter_object_name(self.object_name)

    def tearDown(self):
        self.service_utils.close_browser()

    def test_td_uc05_01_upload_pdf_file(self):
        file_name = "example.pdf"
        file_path = os.path.join(self.file_folder, file_name)
        self.overview_page.upload_pdf_file(file_path)
