import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'
import s from './../../../../p1-main/m1-ui/u1-app/App.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

type SuperEditableSpanType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string

    spanProps?: DefaultSpanPropsType
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus,
        onBlur,
        onEnter,
        spanProps,

        ...restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    const onEnterCallback = () => {
        setEditMode(false);
        onEnter && onEnter()
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false);
        onBlur && onBlur(e)
    }
    const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true);
        onDoubleClick && onDoubleClick(e)
    }

    const spanClassName = `${s.superSpan} ${className}`

    return (
        <>
            {editMode
                ? (
                    <SuperInputText
                        autoFocus
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}

                        {...restProps}
                    />
                ) : (
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={spanClassName}
                        {...restSpanProps}
                    >
                        <img src='http://s1.iconbird.com/ico/2013/1/569/w23h231389814869187pencil.png'/>{children || restProps.value}
                    </span>
                )
            }
        </>
    )
}

export default SuperEditableSpan
