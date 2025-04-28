type LinkedImgProps = { url: string; width?: string | number; showText?: boolean };

function LinkedImg({ url, width, showText }: LinkedImgProps) {
  return (
    <>
      <a href={url} target="_blank">
        <img width={width} src={url} />
      </a>
      {showText && (
        <figcaption>
          <a href={url} target="_blank">
            {url}
          </a>
        </figcaption>
      )}
    </>
  );
}

export default LinkedImg;
