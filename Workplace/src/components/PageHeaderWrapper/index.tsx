import React from 'react';
import { RouteContext } from '@ant-design/pro-layout';
import { PageHeader, Typography } from 'antd';
import styles from './index.less';
import { GridContent } from '@ant-design/pro-layout';

interface IPageHeaderWrapperProps {
  content?: React.ReactNode;
  title?: React.ReactNode;
  extraContent?: React.ReactNode;
}

const PageHeaderWrapper: React.SFC<IPageHeaderWrapperProps> = ({
  children,
  content,
  title,
  extraContent,
  ...restProps
}) => (
  <RouteContext.Consumer>
    {value => (
      <div style={{ margin: '-24px -24px 0' }}>
        <PageHeader
          title={title}
          {...restProps}
          {...value}
        >
          <div className={styles.detail}>
            <div className={styles.main}>
              <div className={styles.row}>
                {content && <div className={styles.content}>{content}</div>}
                {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
              </div>
            </div>
          </div>
        </PageHeader>
        {children ? (
          <GridContent>
            <div className={styles['children-content']}>{children}</div>
          </GridContent>
        ) : null}
      </div>
    )}
  </RouteContext.Consumer>
);

export default PageHeaderWrapper;
