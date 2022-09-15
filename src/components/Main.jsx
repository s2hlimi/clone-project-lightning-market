import styled from "styled-components";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getProduct } from "../redux/modules/products";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function Main(props) {
  console.log(props);
  const { mo1, mo2 } = props;
  console.log(mo2);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  console.log(products);

  // 리덕스에서 포스트 리스트를 로딩
  useEffect(() => {
    dispatch(__getProduct());
  }, [dispatch]);
  console.log(products?.data?.data);


  return (

    <Section>
      <H2>오늘의 상품 추천</H2>
      <ItemInfos>
        <ItemContainer>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map((product) => {
              return (
                <div
                  onClick={() => {
                    navigate(`/products/${product.id}`);
                  }}
                  key={product.id}
                >
                  <CardInner>
                    <CardHead>
                      <img src={product.imgUrl} />
                      <Sth />
                    </CardHead>
                    <CardContents>
                      <ItemName>{product.title}</ItemName>
                      <ItemContentBottom>
                        <Price>{product.price}</Price>
                        <Time>2시간 전</Time>
                      </ItemContentBottom>
                    </CardContents>
                  </CardInner>
                </div>
              );
            })}
          </div>
        </ItemContainer>
      </ItemInfos>

    </Section>
  );
}

const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
`;
const Section = styled.section`
  width: 1050px;
  margin: auto;
  padding: 3rem 0px 1.5rem 30px;

`;

const ItemInfos = styled.div`
  position: relative;
  overflow: hidden;
`;
const ItemContainer = styled.div`
  width: 1050px;
`;

const CardInner = styled.a`
  border: 1px solid rgb(238, 238, 238);
  background: rgb(255, 255, 255);
  display: block;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const CardHead = styled.div`
  position: relative;
  width: 194px;
  height: 194px;
  img {
    vertical-align: bottom;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 194px;
    height: 194px;
  }
`;

const Sth = styled.div``;

const CardContents = styled.div`
  padding: 15px 10px;
  height: 50px;
`;
const ItemName = styled.div`
  position: relative;
  font-size: 14px;
  padding-bottom: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 170px;
`;

const ItemContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &::after {
    content: "원";
    font-size: 13px;
    margin-left: 3px;
  }
`;
const Time = styled.div`
  font-size: 12px;
  color: rgb(136, 136, 136);
`;

export default Main;
