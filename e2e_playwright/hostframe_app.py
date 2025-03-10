# Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import time

import streamlit as st


def page2():
    st.header("Page 2")


def page3():
    st.header("Page 3")


# the multi-pages are added to populate the sidebar. In the test, we are not actually
# use them.
st.navigation(
    [
        st.Page(page2, title="02_App_Page_2", default=True),
        st.Page(page3, title="03_App_Page_3"),
    ]
)

st.slider("Enter a number", 0, 20, 0)
st.checkbox("Check me out", value=True)
st.radio("Radio Widget", ["Option 1", "Option 2", "Option 3"])

with st.sidebar:
    st.write("Hello sidebar")

# Allows for testing of script re-run / stop behavior
time.sleep(3)
