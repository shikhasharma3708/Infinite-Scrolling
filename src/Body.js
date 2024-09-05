import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import ProductCard from "./ProductCard";
import ShimmerLoader from './ShimmerLoader';

const Body = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  const fetchMoreData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${index}&limit=10`)
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data]);
        res.data.length > 0 ? setHasMore(true) : setHasMore(false);
    })
    .catch((err) => console.log(err));

  setIndex((prevIndex) => prevIndex + 1);
};
return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<ShimmerLoader />}
      endMessage={
        <p style={{ textAlign: 'center', color: '#e0a80d' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className='container'>
        <div className='row'>
        <h1 className="products">Products</h1>
          {items &&
            items.map((item) => <ProductCard data={item} key={item.id} />)}
        </div>
      </div>
    </InfiniteScroll>
  );
};
export default Body;