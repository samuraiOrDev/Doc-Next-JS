import Image, { ImageProps } from 'next/image'
import React from 'react'


interface ImageComponentProps extends ImageProps {
  className?: string
}
export const ImageComponent = (props: ImageComponentProps) => {
  const { className, ...imageProps } = props
  return (
    <Image
      className={className || ''}
      src={imageProps.src}
      alt={imageProps.alt || ''}
      width={imageProps.width || 50}
      height={imageProps.height || 50}
    />
  )
}
