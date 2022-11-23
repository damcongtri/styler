import { DownOutlined, HeartOutlined, MenuUnfoldOutlined, SearchOutlined, ShoppingCartOutlined, SyncOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Col, Drawer, Row, Space } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import Btn_x from "../../../component/btn/btn_x";
import style from "./header.module.scss";
import NavDrawer from "./nav_drawer/drawer";


function Header() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className={clsx(style.header)}>
                <div className={clsx("container-xxl", style.container_styler)}>
                    <Row justify="space-between" align='middle'>
                        <Row align={"middle"}>
                            <MenuUnfoldOutlined onClick={showDrawer} style={{ fontSize: "22px", cursor: "pointer" }} />
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
                                    <div className={clsx(style.header_icon)}><ShoppingCartOutlined /></div>
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
                onClose={onClose}
                closable={false}
                open={open}
                bodyStyle={{ padding: '0' }}
                maskStyle={{ backgroundColor: "#d5d5d573" }}
            // extra={
            //     <Space>
            //         <Button onClick={onClose}>Cancel</Button>
            //         <Button type="primary" onClick={onClose}>
            //             OK
            //         </Button>
            //     </Space>
            // }
            >
                <div className={style.btn_x}>
                    <p onClick={onClose} >
                        <Btn_x></Btn_x>
                    </p>
                </div>

                <NavDrawer></NavDrawer>
            </Drawer>
        </>
    );
}

export default Header;