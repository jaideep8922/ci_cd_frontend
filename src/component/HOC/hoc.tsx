"use client"
import React, { useState } from 'react'

const HocMain = (WrapperComponent: any) => {

    const withCount = () => {
        const [first, setfirst] = useState(0)

        const handleClick = () => {
            setfirst(first + 1)
        }

        return <WrapperComponent first={first} handleClick={handleClick} />
    }

    return withCount
}

export default HocMain