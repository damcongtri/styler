import { DownOutlined, HeartOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingCartOutlined, SyncOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Col, Drawer, Row, Space } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import Btn_x from "../../../component/btn/btn_x";
import style from "./header.module.scss";
import CartDrawer from "./_drawer/cart/cart";



function Header() {
    const [openNav, setOpenNav] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const showDrawerNav = () => {
        setOpenNav(true);
    };

    const onCloseNav = () => {
        setOpenNav(false);
    };
    const showDrawerCart = () => {
        setOpenCart(true);
    };

    const onCloseCart = () => {
        setOpenCart(false);
    };
    return (
        <>
            <div className={clsx(style.header)}>
                <div className={clsx("container-xxl", style.container_styler)}>
                    <Row justify="space-between" align='middle'>
                        <Row align={"middle"}>
                            <MenuUnfoldOutlined onClick={showDrawerNav} style={{ fontSize: "22px", cursor: "pointer" }} />
                            <Link to={"/"} className={clsx(style.logo)}>
                                styler
                            </Link>
                        </Row >

                        <div className={clsx(style.menu, 'd-flex')}>
                            <div className={clsx(style.item)}>
                                <Link to="/shop">Shop</Link>
                            </div>
                            <div className={clsx(style.item)}>
                                <Link to="/shop" >Category <i className="fa-solid fa-angle-down"></i></Link>
                                <div className={clsx(style.drop_menu)}>
                                    <Row>
                                        <Col span={7}>
                                            <div className={clsx(style.left)}>
                                                <h5 className={clsx(style.title)}>All Categories</h5>
                                                <p className={clsx(style.item_cate)}>Children</p>
                                                <p className={clsx(style.item_cate)}>Children</p>
                                                <p className={clsx(style.item_cate)}>Children</p>
                                                <p className={clsx(style.item_cate)}>Children</p>
                                                <p className={clsx(style.item_cate)}>Children</p>
                                                <p className={clsx(style.item_cate)}>Children</p>
                                                <Link to="/shop" className={clsx(style.btn_shop)}><span>All Products <i className="fa-solid fa-chevron-right"></i></span> </Link>

                                            </div>
                                        </Col>
                                        <Col span={17}>
                                            <Row gutter={[15, 15]}>
                                                <Col md={6} lg={4} xl={4}>
                                                    <div className={clsx(style.card)}>
                                                        <div className={clsx(style.image)}>
                                                            <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/product-name-36-300x300.jpeg" alt="" />
                                                        </div>
                                                        <div className={clsx(style.card_title)}>Women</div>
                                                    </div>
                                                </Col>
                                                <Col md={6} lg={4} xl={4}>
                                                    <div className={clsx(style.card)}>
                                                        <div className={clsx(style.image)}>
                                                            <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/product-name-36-300x300.jpeg" alt="" />
                                                        </div>
                                                        <div className={clsx(style.card_title)}>Women</div>
                                                    </div>
                                                </Col>
                                                <Col md={6} lg={4} xl={4}>
                                                    <div className={clsx(style.card)}>
                                                        <div className={clsx(style.image)}>
                                                            <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/product-name-36-300x300.jpeg" alt="" />
                                                        </div>
                                                        <div className={clsx(style.card_title)}>Women</div>
                                                    </div>
                                                </Col>
                                                <Col md={6} lg={4} xl={4}>
                                                    <div className={clsx(style.card)}>
                                                        <div className={clsx(style.image)}>
                                                            <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/product-name-36-300x300.jpeg" alt="" />
                                                        </div>
                                                        <div className={clsx(style.card_title)}>Women</div>
                                                    </div>
                                                </Col>
                                                <Col md={6} lg={4} xl={4}>
                                                    <div className={clsx(style.card)}>
                                                        <div className={clsx(style.image)}>
                                                            <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/product-name-36-300x300.jpeg" alt="" />
                                                        </div>
                                                        <div className={clsx(style.card_title)}>Women</div>
                                                    </div>
                                                </Col>
                                                <Col md={6} lg={4} xl={4}>
                                                    <div className={clsx(style.card)}>
                                                        <div className={clsx(style.image)}>
                                                            <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/product-name-36-300x300.jpeg" alt="" />
                                                        </div>
                                                        <div className={clsx(style.card_title)}>Women</div>
                                                    </div>
                                                </Col>
                                                <Col md={6} lg={4} xl={4}>
                                                    <div className={clsx(style.card)}>
                                                        <div className={clsx(style.image)}>
                                                            <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/product-name-36-300x300.jpeg" alt="" />
                                                        </div>
                                                        <div className={clsx(style.card_title)}>Women</div>
                                                    </div>
                                                </Col>
                                                <Col md={6} lg={4} xl={4}>
                                                    <div className={clsx(style.card)}>
                                                        <div className={clsx(style.image)}>
                                                            <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/product-name-36-300x300.jpeg" alt="" />
                                                        </div>
                                                        <div className={clsx(style.card_title)}>Women</div>
                                                    </div>
                                                </Col>
                                                <Col md={6} lg={4} xl={4}>
                                                    <div className={clsx(style.card)}>
                                                        <div className={clsx(style.image)}>
                                                            <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/product-name-36-300x300.jpeg" alt="" />
                                                        </div>
                                                        <div className={clsx(style.card_title)}>Women</div>
                                                    </div>
                                                </Col>
                                                <Col md={6} lg={4} xl={4}>
                                                    <div className={clsx(style.card)}>
                                                        <div className={clsx(style.image)}>
                                                            <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/product-name-36-300x300.jpeg" alt="" />
                                                        </div>
                                                        <div className={clsx(style.card_title)}>Women</div>
                                                    </div>
                                                </Col>
                                                <Col md={6} lg={4} xl={4}>
                                                    <div className={clsx(style.card)}>
                                                        <div className={clsx(style.image)}>
                                                            <img src="https://f8g8b9p5.rocketcdn.me/themes/styler/fashion/wp-content/uploads/2021/12/product-name-36-300x300.jpeg" alt="" />
                                                        </div>
                                                        <div className={clsx(style.card_title)}>Women</div>
                                                    </div>
                                                </Col>

                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </div>

                            <div className={clsx(style.item)}>About Us</div>
                            <div className={clsx(style.item)}>Contact</div>
                        </div>
                        <div className={clsx(style.header_right)}>
                            <Space>
                                <div className={clsx(style.header_icon)}><SearchOutlined /></div>
                                <Badge style={{ backgroundColor: '#daa174' }} count="2">
                                    <div onClick={showDrawerCart} className={clsx(style.header_icon)}><ShoppingCartOutlined /></div>
                                </Badge>
                                <Badge style={{ backgroundColor: '#daa174' }} count="0">
                                    <div className={clsx(style.header_icon)}><HeartOutlined /></div>
                                </Badge>
                                <Badge style={{ backgroundColor: '#daa174' }} count="0">
                                    <div className={clsx(style.header_icon)}><SyncOutlined /></div>
                                </Badge>
                                <Badge style={{ backgroundColor: '#daa174' }} count="0">
                                    <div className={clsx(style.header_icon)}><UserOutlined /></div>
                                </Badge>


                            </Space>
                        </div>

                    </Row>
                </div>
            </div >
            <Drawer
                // title="Drawer with extra actions"
                placement={"left"}
                width={530}
                onClose={onCloseNav}
                closable={false}
                open={openNav}
                bodyStyle={{ padding: '0' }}
                maskStyle={{ backgroundColor: "#d5d5d573" }}
            // extra={
            //     <Space>
            //         <Button onClick={onCloseNav}>Cancel</Button>
            //         <Button type="primary" onClick={onCloseNav}>
            //             OK
            //         </Button>
            //     </Space>
            // }
            >

                <Row className={clsx(style.nav)}>
                    <Col flex="80px" className={clsx(style.left_nav, "col-xs-12")} >
                        <div className={style.btn_x}>
                            <p onClick={onCloseNav} >
                                <Btn_x></Btn_x>
                            </p>
                        </div>
                        <div className={clsx(style.icon_group)}>
                            <div className={clsx(style.nav_icon)}>
                                <Badge style={{ backgroundColor: '#daa174' }} count="0">
                                    <div className={clsx(style.item_icon)}><SearchOutlined /></div>
                                </Badge>
                            </div>
                            <div className={clsx(style.nav_icon)}>
                                <Badge offset={[0, 10]} style={{ backgroundColor: '#daa174' }} count="2">
                                    <div className={clsx(style.item_icon)}><ShoppingCartOutlined /></div>
                                </Badge>
                            </div>
                            <div className={clsx(style.nav_icon)}>
                                <Badge offset={[0, 10]} style={{ backgroundColor: '#daa174' }} count="0">
                                    <div className={clsx(style.item_icon)}><HeartOutlined /></div>
                                </Badge>
                            </div>
                            <div className={clsx(style.nav_icon)}>
                                <Badge offset={[0, 10]} style={{ backgroundColor: '#daa174' }} count="0">
                                    <div className={clsx(style.item_icon)}><SyncOutlined /></div>
                                </Badge>
                            </div>
                            <div className={clsx(style.nav_icon)}>
                                <Badge offset={[0, 10]} style={{ backgroundColor: '#daa174' }} count="0">
                                    <div className={clsx(style.item_icon)}><UserOutlined /></div>
                                </Badge>
                            </div>
                        </div>
                    </Col>
                    <Col flex="auto">
                    </Col>
                </Row>

            </Drawer>
            <Drawer

                placement={"right"}
                width={window.innerWidth > 460 ? 460 : '100%'}
                closable={false}
                onClose={onCloseCart}
                open={openCart}
                maskStyle={{ backgroundColor: "#d5d5d573" }}
            >
                <div className={clsx(style.drawer_right)}>
                    <div className={clsx(style.drawer_rt)}>

                        <div className={style.btn_x}>
                            <p onClick={onCloseCart} >
                                <Btn_x></Btn_x>
                            </p>
                        </div>
                        <div className={clsx(style.icon_drawer_group)}>
                            <Badge offset={[-12, 4]} style={{ backgroundColor: '#daa174' }} count="2">
                                <div onClick={showDrawerCart} className={clsx(style.icon_drawer)}><ShoppingCartOutlined /></div>
                            </Badge>
                            <Badge offset={[-12, 4]} style={{ backgroundColor: '#daa174' }} count="0">
                                <div className={clsx(style.icon_drawer)}><HeartOutlined /></div>
                            </Badge>
                            <Badge offset={[-12, 4]} style={{ backgroundColor: '#daa174' }} count="0">
                                <div className={clsx(style.icon_drawer)}><SyncOutlined /></div>
                            </Badge>

                        </div>

                    </div>
                    <CartDrawer />
                </div>

            </Drawer>

        </>
    );
}

export default Header;