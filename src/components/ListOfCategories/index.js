import React, { useEffect, useState, Fragment } from "react";
import { Category } from "../Category";
import { List, Item } from "./styled";
import { categories as mockCategories } from "../../../api/db.json";

const URL_API = "https://petgram-server-luis.luisyupanqui.now.sh";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${URL_API}/categories`)
      .then(res => res.json())
      .then(response => {
        setLoading(false);
        setCategories(response);
      })
      .catch(error => {
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);
  // const getCategories = async () => {
  //   let response = await fetch(`${URL_API}/categories`);
  //   response = await response.json();
  //   console.log(response);
  //   setCategories(response);
  // };
  // getCategories();

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200;

      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);

  const renderList = (fixed, loading) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="loading">
          <Category loading={loading}></Category>
        </Item>
      ) : (
        categories.map(category => (
          <Item key={category.id}>
            <Category
              {...category}
              loading={loading}
              path={`/pet/${category.id}`}
            ></Category>
          </Item>
        ))
      )}
    </List>
  );

  return (
    <Fragment>
      {renderList(false, loading)}
      {showFixed && renderList(true, loading)}
    </Fragment>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
