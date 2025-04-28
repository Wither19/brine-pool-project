type LinkedImgProps = { url: string; width?: string | number };

function LinkedImg({ url, width }: LinkedImgProps) {
  return (
    <>
      <a href={url}>
        <img width={width} src={url} />
      </a>
    </>
  );
}

export default LinkedImg;
