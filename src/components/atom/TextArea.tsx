import React, { useState } from "react";
import { EToastType, showToast } from "./Toast";

interface ITextareaProps {
    placeholder?: string;
    limit?: number;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ placeholder, limit = 150, value, onChange }: ITextareaProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textvalue = e.target.value;
        if (textvalue.length <= limit) {
            onChange(e);
        } else {
            showToast({ type: EToastType.ERROR, message: `${limit}자 이하로 입력해주세요.` });
        }
    };

    return (
        <>
            <textarea
                className='w-full h-[330px] p-5 rounded-md outline-none resize-none bg-gray000'
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
            <p className='absolute bottom-1 right-1 mt-2 text-sm text-gray100'>
                {value.length} / {limit}
            </p>
        </>
    );
};

export default TextArea;
