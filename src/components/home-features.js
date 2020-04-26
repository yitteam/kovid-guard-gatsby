import React ,{ FunctionComponent} from 'react'
import {Card,Container,Row,Col,Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const CardFeature = (props) => {
    return (
    <Card className="text-center">
        <Card.Body>
        <FontAwesomeIcon icon={faCheckCircle} color={"red"}/>
        
        <Card.Title>
        
            {props.title}
            </Card.Title>
        <Card.Text>
        
            {props.content}
        </Card.Text>
        </Card.Body>
    </Card>
    )
};

export default (props) => (
    <Container className="containfeatures">
        <Row>
            <Col sm>
            <i className="fa fa-spinner fa-spin"></i>
                <CardFeature title="Databases" content="Hệ thống cơ sở dữ liệu các trang web bị phát hiện được cập nhập liên tục"></CardFeature>
            </Col>
            <Col sm>
                <CardFeature title="Powered by AI" content="Sử dụng trí tuệ nhân tạo vào quá trình phát hiện và phân tích dữ liệu"></CardFeature>
            </Col>
            <Col sm>
                <CardFeature title="Trusted Sources" content="Sử dụng nguồn thông tin uy tín từ các tổ chức chống phishing hàng đầu"></CardFeature>
            </Col>
        </Row>
    </Container>
) 