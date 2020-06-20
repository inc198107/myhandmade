import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { nextImage } from "../../../Actions/galleryActions";

import PropTypes from "prop-types";
import { A } from "hookrouter";
import { makeStyles } from "@material-ui/core/styles";

//import Roll from "react-reveal/Roll";

import GalleryCard from "../../GalleryCard/GalleryCard";
const useStyle = makeStyles({
  galleryContainer: {
    position: "relative",
    maxWidth: "360px",
    maxHeight: "400px",
    willChange: "transform",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  galleryName: {
    textDecoration: "none",
    paddingBottom: "5px",
    color: "rgba(255, 255, 255, 0.82)",
    fontFamily: "Bernard-Scriptic",
    fontSize: "50px",
    "&:hover": {
      color: "rgba(255, 255, 255,1)"
    }
  }
});

const LandingGallery = props => {
  const style = useStyle();
  const { imgArr, categoryName,  nextImage } = props;

  const galery = imgArr.map((el, index) => (
    <GalleryCard
      key={index}
      img={el.img}
      imgName={el.name}
      rt={true}
      top="70px"
    />
  ));
  
  return (
    <div className={style.galleryContainer} onClick={nextImage}>
      <A href="/" className={style.galleryName}>
        <h3>{categoryName}</h3>
      </A>
      {galery}
    </div>
  );
};

LandingGallery.propTypes = {
  imagesArr: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, img: PropTypes.string })
  ),
  categoryName: PropTypes.string
};

LandingGallery.defaultProps = {
  categoryName: "Gallery"
};

const mapStateToProps = state => {
  return {
    imgArr: state.fetchGalleryImages
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      nextImage
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingGallery);
