import React, { useState } from 'react';
import { Card, Modal } from 'antd';

import { ZoomInOutlined, DownloadOutlined } from '@ant-design/icons';
import { downloadImgAPI } from '../../modules/unsplashAPI';
const { Meta } = Card;

const ImgCard = ({ img, loading }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { alt_description, id, urls } = img;
  const { thumb, regular, full } = urls;

  const handleZoom = () => setModalVisible(true);
  const handleOk = () => setModalVisible(false);

  const toDataURL = (url) =>
    fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });

  const handleDownload = async () => {
    const a = document.createElement('a');
    a.href = await toDataURL(full);
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <Card
      loading={loading}
      hoverable
      style={{ width: 240, marginTop: 16, height: 400 }}
      cover={<img src={thumb} height={300} onClick={handleZoom} />}
      actions={[
        <ZoomInOutlined key="like" onClick={handleZoom} />,
        <DownloadOutlined key="download" onClick={handleDownload} />,
      ]}
    >
      {' '}
      <Meta description={alt_description} />
      <Modal
        title={alt_description}
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleOk}
      >
        <img
          src={regular}
          width={480}
          height={640}
          onClick={handleDownload}
          style={{ cursor: 's-resize' }}
        />
      </Modal>
    </Card>
  );
};

export default ImgCard;
