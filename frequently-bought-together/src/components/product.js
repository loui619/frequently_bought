import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import ColorSelect from "./color";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../redux/productSlice";
import { Link } from "react-router-dom";
import ProductCounter from "./productCounter";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProductView from "./productView";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const Product = (props) => {
  const {
    id,
    title,
    image,
    price,
    rating,
    cartedItem,
    checked,
    description,
    defaultItem,
  } = props;

  const dispatch = useDispatch();
  const [value, setValue] = useState(rating.rate);
  const [isChecked, setIsChecked] = useState(checked);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (checked) {
      dispatch(addCart(props));
    }
  }, []);
  const colors = [
    {
      color: "#000000",
      label: "black",
    },

    {
      color: "#0e8511",
      label: "green",
    },
  ];

  const addProductToCart = (e, items) => {
    const checked = e.target.checked;
    setIsChecked(!isChecked);
    if (checked) {
      dispatch(addCart(items));
    } else {
      dispatch(removeCart(items));
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div className="products-list">
      <Checkbox
        className="align-right"
        onChange={(e) => addProductToCart(e, props)}
        checked={isChecked}
      />
      {/* <Link to="/productview" state={props}>
        <div className="prod-thumbnail-container">
        <img src={image} alt={title} />
      </div>
     </Link> */}
      <div className="prod-thumbnail-container" onClick={handleClickOpen}>
        <img src={image} alt={title} />
      </div>
      <div className="prod-description-container">
        <div className="rating-container">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <span>{rating.count}</span>
        </div>
        {/* <Link to="/productview" state={props}> {defaultItem ? <span className="title-container"><h4 className="clear-block">This Item :</h4>  {title}</span> :<span className="title-container">{title}</span>}</Link> */}
        {defaultItem ? (
          <span className="title-container" onClick={handleClickOpen}>
            <h4 className="clear-block">This Item :</h4> {title}
          </span>
        ) : (
          <span className="title-container " onClick={handleClickOpen}>{title}</span>
        )}
        <div className="rate-details">
          <div className="actual-price">
            <span>was &#8356; {(price + 10).toPrecision(4)}</span>
          </div>
          <div>
            <span className="discounted-price">
              &#8356;{price.toPrecision(4)}
            </span>
            <span>Inc VAT</span>
          </div>
          <span>&#8356;{(price * 0.6).toPrecision(4)} ex VAT</span>
          {id !== 2 ? (
            <ColorSelect id={id} color={colors} />
          ) : (
            <ProductCounter data={props} isChecked={isChecked} />
          )}
        </div>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
          
        </DialogTitle>
        <div className="rate-wrapper">
        <Rating name="simple-controlled" value={value} /> 
        <span>{rating.count}</span>
        </div>
        
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <ProductView data={props} />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};
export default Product;
