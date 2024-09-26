import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";


export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: "100%", height: "100%", overflow: "clip" }}>
      <ImageListItem key="Subheader" cols={2}>
        <div style={{ backgroundColor: "lightblue", height: "100px" }}>
          <h1 style={{ color:"black", textAlign: "center", marginTop:"20px", fontFamily:"cursive" }}>
            Know My Country
          </h1>{" "}
        </div>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2020/08/ram-mandir-image-1596552261.jpg",
    title: "Jai Shree Ram",
    author: "@Ayodhya",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://thumbs.dreamstime.com/z/prem-mandir-vrindavan-mathura-temple-divine-love-holy-city-india-128094269.jpg",
    title: "Radhe Krishna",
    author: "@Mathura",
  },
  {
    img: "https://www.deccanherald.com/sites/dh/files/gallery_images/2021/12/13/file7it39sqcijbouyq81z6.jpg",
    title: "Kashi Vishvanath Temple",
    author: "@Kashi",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVqHoRjUIQY-S-kkQk_WPz2sdzjYvGUFt9q1a3MzfQvg&s",
    title: "KedarNath Temple",
    author: "@Uttarakhand",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://ihplb.b-cdn.net/wp-content/uploads/2018/12/hsu.jpg",
    title: "Statue of Unity",
    author: "@Gujrat",
    cols: 2,
  },
  {
    img: "https://indianmaharajatours.com/wp-content/uploads/2022/06/Ms-Franc-6713.jpg",
    title: "The Taj",
    author: "@Agra",
    cols: 2,
  },
];
