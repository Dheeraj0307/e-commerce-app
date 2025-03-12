import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import userImg from '../icons-size-logo/user.png';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import CartAmountToggle from '../component/CartAmountToggle';

import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";

import Star from '../component/Star';
import { useFilterContext } from '../context/filter_context';
import SingleProductSkeleton from '../component/skeleton-loading/SingleProductSkeleton';
import FormatPrice from '../helpers/FormatPrice'

import GooglePayButton from '@google-pay/button-react';
import './css/perProduct.css';

const PerProduct = () => {

    const { getSingleProduct, isSingleLoading, singleProduct } = useFilterContext();

    const [amount, setAmount] = useState(1);

    const { addToCart } = useCartContext();
    const { id } = useParams();
    const navigate = useNavigate();

    const API = 'https://dummyjson.com/products';

    const finalValue = singleProduct?.price ? parseFloat(singleProduct.price) : 10;
    const inrValue = (finalValue * 84.91).toFixed(2);

    const mrp = (singleProduct.price + (singleProduct.discountPercentage / 100 * singleProduct.price)).toFixed(2);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    const setIncrease = () => {
        amount < singleProduct.stock ? setAmount(amount + 1) : setAmount(singleProduct.stock);
    }


    const handleCart = () => {
        navigate('/cart', { state: singleProduct });
        addToCart(singleProduct, amount)
    }

    useEffect(() => {
        getSingleProduct(`${API}/${id}`);
    }, [])


    if (isSingleLoading) return <SingleProductSkeleton />

    return (
        <div>
            <div className="productContainer">

                <div className="leftSidebar">
                    <img src={singleProduct.thumbnail} alt={`image${id}`} className='leftSideImg' />
                </div>

                <div className="RightSidebar">

                    <div className="productInfo">
                        <h1 className='headingH1' > {singleProduct.title}  </h1>
                        <div className='margin20'>
                            <div className="star-outer">
                                <div className='star-inner' style={{
                                    width: `${(singleProduct.rating / 5) * 100}%`,
                                }}></div>
                            </div>
                            ({singleProduct.rating} ratings)
                        </div>

                        <div>
                            <p className='margin20 mrp'>M.R.P: <b>  < FormatPrice price={mrp} />  </b></p>

                            <p className='margin20' style={{ color: 'green' }}><b> Deal of the day : < FormatPrice price={singleProduct.price} /></b></p>

                        </div>

                        <p >{singleProduct.description}</p>

                        <div className='mart-product-features'>
                            <div>
                                <div> <TbTruckDelivery size={50} className='feature-icons' /></div>
                                Low Delivery Charges
                            </div>
                            <div>
                                <div>  <TbReplace size={50} className='feature-icons' /></div>
                                {singleProduct.returnPolicy}
                            </div>
                            <div>
                                <div>  <TbTruckDelivery size={50} className='feature-icons' /></div>
                                Smart Mart Delivery
                            </div>
                            <div>
                                <div> <MdOutlineSecurity size={50} className='feature-icons' /></div>
                                {singleProduct.warrantyInformation}
                            </div>
                        </div>
                        <hr />

                        <div className='margin20'>
                            <p>Available : <b>{singleProduct.availabilityStatus}</b></p>
                            {singleProduct.brand && <p>Brand :<b>  {singleProduct.brand}</b></p>}
                            <p>Tags :<b>  {singleProduct.tags && singleProduct.tags.map(arr => `#${arr} `)}</b></p>
                        </div>
                        <hr />
                    </div>

                    <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />

                    <div className='buy-section'>

                        <button className='googleBtn' onClick={handleCart}> Add to Cart</button>

                        <GooglePayButton
                            className='googleBtn'
                            environment='TEST'
                            buttonSizeMode='fill'
                            paymentRequest={{
                                apiVersion: 2,
                                apiVersionMinor: 0,
                                allowedPaymentMethods: [
                                    {
                                        type: 'CARD',
                                        parameters: {
                                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                        },
                                        tokenizationSpecification: {
                                            type: 'PAYMENT_GATEWAY',
                                            parameters: {
                                                gateway: 'example',
                                                gatewayMerchantId: 'exampleGatewayMerchantId',
                                            },
                                        },
                                    },
                                ],
                                merchantInfo: {
                                    merchantId: '1234567890123456',
                                    merchantName: 'Demo only',
                                },
                                transactionInfo: {
                                    totalPriceStatus: 'FINAL',
                                    totalPriceLabel: 'Total',
                                    totalPrice: inrValue,
                                    // ? singleProduct.price.toString() : '10.00',
                                    currencyCode: 'INR',
                                    countryCode: 'IN',
                                },
                                shippingAddressRequired: true,
                                callbackIntents: ['PAYMENT_AUTHORIZATION'],

                            }}
                            onLoadPaymentData={(paymentData) => {
                                // console.log('TODO: send order to server', paymentData.paymentMethodData);
                                console.log('TODO: send order to server', paymentData);
                            }}

                            onPaymentAuthorized={paymentData => {
                                console.log(paymentData);
                                return { transactionState: 'SUCCESS' }
                            }}
                            existingPaymentMethodRequired='false'
                            buttonColor='Black'
                            buttonType='buy'

                            onError={(error) => {
                                console.error('Google Pay Error:', error); // Log errors for debugging
                            }}
                        />

                    </div>
                    <hr />


                </div>
            </div>
            {/* review section  */}

            <div className='product_description'>
                <h2>Reviews by customers :</h2>
                <div className='review_section'>
                    {singleProduct.reviews && singleProduct.reviews.map((arr, i) =>
                        <div className='per-reviews' key={i}>
                            <div className="profilePic">
                                <img src={userImg} alt="userlogo" width={50} height={50} />
                                <div>
                                    <p>{arr.reviewerName}</p>
                                    <p>{arr.date}</p>
                                </div>
                            </div>
                            <div className="user_message">
                                <div>
                                    <b> Rating:  </b>  <Star rating={arr.rating} />
                                </div>

                                <p><b>Comments :</b> {arr.comment}</p>
                            </div>
                        </div>
                    )}
                </div></div>
        </div>
    )
}

export default PerProduct