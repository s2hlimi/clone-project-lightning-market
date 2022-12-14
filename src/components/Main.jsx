import styled from "styled-components";
import Banner from "./Banner";

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getProduct } from "../redux/modules/products";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  console.log(products)

  // 리덕스에서 포스트 리스트를 로딩
  useEffect(() => {
    dispatch(__getProduct());
  }, [dispatch]);
  console.log(products?.data?.data);
  // 컴포넌트 리턴

  return (
    <>
      <Banner />
      <Section>
        <H2>오늘의 상품 추천</H2>
        <ItemInfos>
          <ItemContainer>
            <Card>
              <div>
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
                          <CardContents>
                            <ItemName>{product.title}</ItemName>
                            <ItemContentBottom>
                              <Price>{product.price}</Price>
                              <Time>2시간 전</Time>
                            </ItemContentBottom>
                          </CardContents>
                        </CardHead>
                      </CardInner>
                    </div>
                  );
                })}
              </div>
            </Card>
          </ItemContainer>
        </ItemInfos>
      </Section>
    </>
  );
}

const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
`;
const Section = styled.section`
  width: 1024px;
  margin: auto;
  padding: 3.5rem 0px 1.5rem;
`;
const ItemInfos = styled.div`
  position: relative;
  overflow: hidden;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// 카드
const Card = styled.div`
  width: 196px;
  margin-right: 11px;
  margin-bottom: 11px;
  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const CardInner = styled.a`
  border: 1px solid rgb(238, 238, 238);
  background: rgb(255, 255, 255);
  display: block;
`;

const CardHead = styled.div`
  position: relative;
  width: 100%;
  height: 194px;
  img {
    vertical-align: bottom;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
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
