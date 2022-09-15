import styled from "styled-components";
import Login from "../pages/Login";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getProduct } from "../redux/modules/products";

const MyProduct = (props) => {
  const { mo1 } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  console.log(products);

  // 리덕스에서 포스트 리스트를 로딩
  useEffect(() => {
    dispatch(__getProduct());
  }, [dispatch]);
  console.log(products?.data?.data);

  const user = localStorage.getItem("nickname");

  let MyProduct = products.filter((product) => {
    return product.nickname == user;
  });

  // 컴포넌트 리턴
  return (
    <>
      <Section>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {MyProduct.map((product) => {
            return (
              <div
                onClick={() => {
                  navigate(`/products/${product.id}`);
                }}
                key={product.id}
              >
                <Card>
                  <CardInner>
                    <CardHead>
                      <img src={product.imgUrl} alt="product" />
                      <Sth />
                    </CardHead>
                    <CardContents>
                      <ItemName>{product.title}</ItemName>
                      <ItemContentBottom>
                        <Price>{product.price}</Price>
                      </ItemContentBottom>
                    </CardContents>
                    <div
                      style={{
                        borderTop: "1px solid rgb(238, 238, 238)",
                      }}
                    >
                      <CardBot>
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAiCAYAAABIiGl0AAAAAXNSR0IArs4c6QAAA6xJREFUWAm1l01IVFEUx51xNAtxIcEENuQIrqTxO8OEmj5IAncVUS2E2kS0axO4C5KiFi0lXIh9QBC1kKgwclNGjaNOSUEapVRiUSHoTOo4/c743vjem/vGp8xcuHPu+Z//Of9778y9740rz0EbGxsrjsViQait9JpEIuF1uVzbGCfo0/jT2GGwx6WlpQN+vz+Gn7G5MkXD4fAOil6C047dlImrxxCfg9tVUFBwtbq6ekbHrVYpzAoLo9FoJ+QL9AJrkkN/3u12d9bW1l5hMsvWnDTh4eHh8uXl5fvMutFK3qD/jLxTDQ0Nv4z5JuHR0VH/4uLiKwjy/WWtseJPLKTZKO7Wq4dCoa1LS0tP8bMqKvURrcT0TU1NbRZfWkqYWXVrhJVI9j+bZmZmbuplk1s9NDR0GNEnOpgrKz8ydBrZ8rBHRHCur0MsCvc1Pazl1GF301PbqOFpBh3Z4Rv0oIvVBgBG01hqYKCwsPBMIBD4bAxHIpGKhYWFbrB9RtxuzDEr9yB6zI5gwV/U19cfYLvktjI1mQh19rOI5wSCpqDC4bgelaXvUcRMEGJzAO0qUZ2oxdrx53XMzsI9KMJldgQDPsgPYtLgK4fCoeigMmgA2R2fCG83YMohxCFlQAHCDSlgE8Tkytx8yDZmbHCKMxIMQSdcJueWFU8Y8pRDiA3KgAJ0yJ1wJMwqGrlSWxQ6Jkg4wjWBamfCzQzfqmOrqGwNXo/c56uoeaTFejSuOWjxmNx7KXiHwYIlpnIr4I1xVo9TPF8nyFgwiYFV6LidhZfgJaFXv6vvUeCEHVmBy7UZ0fAAds3rUq+BcD8X0SFZcR5XWJcecGhFqEnrjkW12rfEJoV5PRlgJg+1QM4MGqG6uroHKWEZsNXnCfzNmWpe3iL1z9LjJmGuux+AF3MlTO1rrDb1FExutS5GQB5tj3Q/WxbRSElJyWVjPZOwBLxe70mI8sKXrTaZn59/pLKy8p+xYJqwz+eLFhUVtUH6aCRuZMwC/tBba2pqvlnz04SFUFVV9Zsj1krSd2vCOvwYNdo4sx9UOUphIfJ9f8XsRXxclbgGNiuiHNOXdjxbYUlgtuMINzN8Y1dAgU+BtTDxfkUsBWUUFhYFfmKCTKAvlWU/kDfPJo7mO3vKSiR5V69Fkrg8DPj32IHtwE2+FhvzmFivx+M5xz/ENV8sJM+xsC4yMjKyKx6P32YC8rdE2iz9HKu8m/QcfqxbWOry7N2CkRfznZzR0/yIvjBeV/sPFdozA8TD8zUAAAAASUVORK5CYII="
                          width="15"
                          height="17"
                          alt="위치 아이콘"
                        />
                        전국
                      </CardBot>
                    </div>
                  </CardInner>
                  {mo1 == true ? <Login></Login> : null}
                </Card>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
};

const Section = styled.section`
  width: 1024px;
  margin: auto;
`;

const Card = styled.div`
  width: 194px;
  height: 194px;
  margin-right: 10px;
  margin-bottom: 140px;
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
    font-size: 12px;
    margin-left: 3px;
  }
`;
const CardBot = styled.div`
  height: 15px;
  font-size: 12px;
  padding: 10px 10px 14px 35px;
  color: rgb(102, 102, 102);
  width: 100%;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    left: 10px;
    top: calc(50% - 8px);
  }
`;
export default MyProduct;
