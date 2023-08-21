import type { FC } from 'react';
import React, { useContext } from 'react';
import ActionButton from '../../_util/ActionButton';
import { ConfirmOkBtnContext } from '../context';
import type { ConfirmDialogProps } from '../ConfirmDialog';

export interface ConfirmOkBtnProps
  extends Pick<
    ConfirmDialogProps,
    'close' | 'isSilent' | 'okType' | 'okButtonProps' | 'rootPrefixCls' | 'onConfirm' | 'onOk'
  > {
  autoFocusButton?: false | 'ok' | 'cancel';
  okTextLocale?:
    | string
    | number
    | true
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>;
}

const ConfirmOkBtn: FC = () => {
  const {
    autoFocusButton,
    close,
    isSilent,
    okButtonProps,
    rootPrefixCls,
    okTextLocale,
    okType,
    onConfirm,
    onOk,
  } = useContext(ConfirmOkBtnContext);
  return (
    <ActionButton
      isSilent={isSilent}
      type={okType}
      actionFn={onOk}
      close={(...args: any[]) => {
        close?.(...args);
        onConfirm?.(true);
      }}
      autoFocus={autoFocusButton === 'ok'}
      buttonProps={okButtonProps}
      prefixCls={`${rootPrefixCls}-btn`}
    >
      {okTextLocale}
    </ActionButton>
  );
};

export default ConfirmOkBtn;
