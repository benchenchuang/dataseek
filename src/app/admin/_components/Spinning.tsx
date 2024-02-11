import React from 'react'
import { Spinner } from "@nextui-org/react";

export default function Spinning(props: { text?: string }) {
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <Spinner label='loading' color='default' />
        </div>
    )
}