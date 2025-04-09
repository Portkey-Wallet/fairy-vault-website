import clsx from 'clsx';
import { Row, Col } from 'antd';
import Copy from 'components/Copy';
import { openWithBlank } from 'utils/router';
import { IBoilerplateInfo } from 'types/mediaKit';
import styles from './styles.module.less';

export default function BoilerplateInfo({ boilerplateTitle, boilerplateContent, boilerplateList }: IBoilerplateInfo) {
  return (
    <div className="section-container">
      <div className={clsx('page-container', 'flex-column', styles.boilerplateWrap)}>
        <div className={styles.title}>{boilerplateTitle}</div>
        <div className={styles.content}>{boilerplateContent}</div>
        <Row className={styles.boilerplateList} gutter={[0, 16]} justify="space-between">
          {boilerplateList?.map(({ boilerplate_id: item }) => (
            <Col key={item.id} span={24} lg={{ span: 12 }}>
              <div className={clsx('flex-row-center', styles.boilerplateItem)}>
                <span className={styles.name}>{item.name}: </span>
                <div className={clsx('flex-row-center', styles.urlWrap)}>
                  <span
                    className={clsx('cursor-pointer', styles.url)}
                    onClick={() => {
                      openWithBlank(item.url);
                    }}>
                    {item.url}
                  </span>
                  <Copy toCopy={item.url} />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
