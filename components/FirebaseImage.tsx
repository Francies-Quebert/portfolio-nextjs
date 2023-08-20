import { getImageUrl } from '@/utils/getImages';
import Image, { ImageProps } from 'next/image'
import React from 'react'

async function FirebaseImage(props: ImageProps) {
    const imageUrl = await getImageUrl(props.src as string) || '';

    return (
        <Image {...props} src={imageUrl} />
    )
}

export default FirebaseImage