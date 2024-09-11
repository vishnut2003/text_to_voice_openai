'use client';

import axios from "axios";
import { useState } from "react";

const ConverterForm = () => {

    const [text, setText] = useState('');
    const [submitErr, setSubmitErr] = useState('');
    const [submitLoading, setSubmitLoading] = useState(false);

    function formSubmit(e) {
        setSubmitLoading(true);
        e.preventDefault();
        if (text.length < 20) {
            setSubmitErr('Please type minimum 20 letters...');
            setTimeout(() => setSubmitErr(''), 5000);
            return setSubmitLoading(false);
        }

        axios.post('/api/texttovoice', { text })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="max-w-96 w-full">
            <form
                onSubmit={formSubmit}
                className="p-3 drop-shadow-2xl bg-white w-full flex flex-col gap-3 items-start">
                <div className="flex flex-col justify-between gap-2 w-full">
                    <label htmlFor="text" className="text-sm font-semibold text-left text-slate-500">Enter the Text</label>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        name="text"
                        id="text"
                        rows={3}
                        className="text-sm border border-slate-300 outline-none p-3 w-full"
                    ></textarea>
                </div>
                <button type="submit" className="text-sm bg-black text-white py-2 px-4 rounded-md hover:scale-105 flex flex-nowrap gap-2 items-center justify-center">
                    {
                        submitLoading &&
                        <div className="w-3 h-3 rounded-full border-l border-b animate-spin"></div>
                    }
                    Convert</button>
                {
                    submitErr &&
                    <div className="text-sm bg-red-200 text-red-600 py-2 px-3 rounded-md w-full">
                        <p>{submitErr}</p>
                    </div>
                }
            </form>
        </div>
    )
}

export default ConverterForm
