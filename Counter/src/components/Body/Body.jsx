import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import './Body.css'

export function Body() {
    const [counter, setCounter] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    const images = [
        'https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_2.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200',
        'https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_8.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200',
        'https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_9.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200',
        'https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_10.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200',
        'https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_14.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200',
        'https://s3.getstickerpack.com/storage/uploads/sticker-pack/mr-incredible-pack/sticker_15.webp?78406250d314e0c6b2dc3620f6a82dac&d=200x200'
    ];

    const handleClickCounter = (value) => {
        if (value === 'add') {
            setCounter(counter + 1);
        } else if (value === 'subtract' && counter > 0) {
            setCounter(counter - 1);
            setCurrentImageIndex(0);
        } else if (value === 'reset') {
            setCounter(0);
            setCurrentImageIndex(0);
        }
    }

    useEffect(() => {

        if (counter >= 40 && currentImageIndex === 0) {
            setCurrentImageIndex(1);
        } else if (counter >= 80 && currentImageIndex === 1) {
            setCurrentImageIndex(2);
        } else if (counter >= 120 && currentImageIndex === 2) {
            setCurrentImageIndex(3);
        } else if (counter >= 160 && currentImageIndex === 3) {
            setCurrentImageIndex(4);
        } else if (counter >= 200 && currentImageIndex === 4) {
            setCurrentImageIndex(5);
        }
    }, [counter, currentImageIndex]);

    return (
        <>

            <h2>How fast are you?</h2>


        <div className='container'>
        <Button onClick={() => handleClickCounter('subtract')}>-</Button>
        {visible && <img src={images[currentImageIndex]} alt="Counter Image" className="image-transition" />}

        <Button onClick={() => handleClickCounter('add')}>+</Button>

            </div>
            <h2>{counter}</h2>
            <Button onClick={() => handleClickCounter('reset')}>Reset</Button>




        </>
    );
}
