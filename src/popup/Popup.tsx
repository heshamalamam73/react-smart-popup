import { forwardRef, RefObject, useCallback } from 'react';
import { DialogProps } from './types';
import { Overlay, Card, Header, Body, Footer, Button, FlexContainer } from './StyledElements';
import { useCloseOnClickAway, useCloseOnPressEscape } from './hooks';
import React from 'react';
import ReactDOM from 'react-dom';

const getRootPopup = () => {
  let PopupRoot = document.getElementById('popup-root');
  if (PopupRoot === null) {
    PopupRoot = document.createElement('div');
    PopupRoot.setAttribute('id', 'popup-root');
    document.body.appendChild(PopupRoot);
  }
  return PopupRoot;
};

export const Popup = forwardRef<any, DialogProps>(
  (
    { isOpen, setIsOpen, handleSubmit, handleClose, closeOnPressEscape, closeOnClickAway, header, children, ...props },
    ref,
  ) => {
    const contentRef = React.useRef<HTMLDivElement>(null);

    const onClickClose = useCallback(() => {
      handleClose?.();
      setIsOpen(false);
    }, [setIsOpen, handleClose]);

    const onClickSubmit = useCallback(() => {
      handleSubmit?.();
    }, [handleSubmit]);

    useCloseOnPressEscape(onClickClose, closeOnPressEscape);
    useCloseOnClickAway(contentRef, onClickClose, closeOnClickAway);

    const DialogContent = useCallback(
      () => (
        <Overlay>
          <Card width={props.width} height={props.height} ref={contentRef as RefObject<HTMLDivElement>}>
            {header && <Header>{header}</Header>}
            <Body>
              <FlexContainer>{children}</FlexContainer>
            </Body>
            <Footer>
              <Button primary onClick={onClickSubmit}>
                Submit
              </Button>
              <Button onClick={onClickClose}>Cancel</Button>
            </Footer>
          </Card>
        </Overlay>
      ),
      [children, onClickClose, onClickSubmit],
    );

    return isOpen ? ReactDOM.createPortal(DialogContent(), getRootPopup()) : null;
  },
);

Popup.defaultProps = {
  closeOnClickAway: true,
  closeOnPressEscape: true,
  width: '50%',
  height: '50%',
};
