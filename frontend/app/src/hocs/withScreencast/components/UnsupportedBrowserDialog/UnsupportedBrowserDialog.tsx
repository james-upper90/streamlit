/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { PureComponent, ReactNode } from "react"

import { Modal, ModalBody, ModalHeader } from "@streamlit/lib"

import {
  StyledScreenCastWarningDialog,
  StyledUnsupportedScreenCastExplanation,
  StyledUnsupportedScreenCastIcon,
} from "./styled-components"

export interface Props {
  /** Callback to close the dialog */
  onClose: () => void
}

class UnsupportedBrowserDialog extends PureComponent<Props> {
  public render(): ReactNode {
    const { onClose } = this.props

    return (
      <Modal isOpen onClose={onClose}>
        <ModalHeader>Record a screencast</ModalHeader>
        <ModalBody>
          <StyledScreenCastWarningDialog data-testid="stUnsupportedBrowserDialog">
            <StyledUnsupportedScreenCastIcon>
              <span role="img" aria-label="Alien Monster">
                👾
              </span>
            </StyledUnsupportedScreenCastIcon>
            <StyledUnsupportedScreenCastExplanation>
              Due to limitations with some browsers, this feature is only
              supported on recent desktop versions of Chrome, Firefox, and
              Edge.
            </StyledUnsupportedScreenCastExplanation>
          </StyledScreenCastWarningDialog>
        </ModalBody>
      </Modal>
    )
  }
}

export default UnsupportedBrowserDialog
