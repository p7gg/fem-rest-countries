import { forwardRef, useState } from "react";

import {
  ImageRoot,
  Figure,
  ImageWrapper,
  Img,
  Placeholder,
  Caption,
} from "./Image.styles";

import { useDidUpdate } from "../../../hooks";

export interface ImageProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "placeholder"> {
  src?: string;
  alt?: string;
  fit?: "contain" | "cover";
  width?: number | string;
  height?: number | string;
  withPlaceholder?: boolean;
  placeholder?: React.ReactNode;
  imageProps?: React.ComponentPropsWithoutRef<"img">;
  imageRef?: React.ForwardedRef<HTMLImageElement>;
  caption?: React.ReactNode;
}

const Image = forwardRef<HTMLDivElement, ImageProps>(
  (
    {
      src,
      alt,
      fit = "cover",
      width = "100%",
      height = "auto",
      withPlaceholder,
      placeholder,
      imageProps,
      imageRef,
      caption,
      ...rest
    },
    ref
  ) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(!src);
    const isPlaceholder = withPlaceholder && (!loaded || error);

    useDidUpdate(() => {
      setLoaded(false);
      setError(false);
    }, [src]);

    return (
      <ImageRoot ref={ref}>
        <Figure>
          <ImageWrapper>
            <Img
              src={src}
              alt={alt}
              style={{ objectFit: fit, width, height }}
              ref={imageRef}
              onLoad={(event) => {
                setLoaded(true);
                typeof imageProps?.onLoad === "function" &&
                  imageProps.onLoad(event);
              }}
              onError={(event) => {
                setError(true);
                typeof imageProps?.onError === "function" &&
                  imageProps.onError(event);
              }}
              {...imageProps}
            />

            {isPlaceholder && <Placeholder>{placeholder}</Placeholder>}

            {!!caption && <Caption>{caption}</Caption>}
          </ImageWrapper>
        </Figure>
      </ImageRoot>
    );
  }
);

export default Image;
