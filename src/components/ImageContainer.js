function ImageContainer(props) {
  return (
    <div
      className="img-container"
      onClick={props.onClickHandler}
      data-name={props.imgName}
    >
      <img className="image" alt="" src={props.imgUrl}></img>
      <div className="img-name">{props.imgName}</div>
    </div>
  );
}

export default ImageContainer;
