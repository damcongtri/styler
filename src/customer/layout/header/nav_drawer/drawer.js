import React, { useState } from 'react';
import { Button, Col, Drawer, Radio, Row, Space } from 'antd';
import style from './drawer.module.scss';
import clsx from 'clsx';
import Btn_x from '../../../../component/btn/btn_x';

const NavDrawer = () => {

    return (
        <>
            <Row className={clsx(style.nav)}>
                <Col flex="80px" className={clsx(style.left)} xs={24}>

                </Col>
                <Col flex="auto">
                </Col>
            </Row>
        </>
    );
};

export default NavDrawer;