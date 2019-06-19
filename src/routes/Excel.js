// excel.js
import React, { Component } from 'react';
import { Button, Icon, message } from 'antd';
import * as XLSX from 'xlsx';
import styles from './WaiterPage.css';

class Excel extends Component {
  onImportExcel = file => {
    // 获取上传的文件对象
    const { files } = file.target;
    // 通过FileReader对象读取文件
    const fileReader = new FileReader();
    fileReader.onload = event => {
      try {
        const { result } = event.target;
        // 以二进制流方式读取得到整份excel表格对象
        const workbook = XLSX.read(result, { type: 'binary' });
         // 存储获取到的数据
        let data = [];
        // 遍历每张工作表进行读取（这里默认只读取第一张表）
        for (const sheet in workbook.Sheets) {
          // esline-disable-next-line
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            // 利用 sheet_to_json 方法将 excel 转成 json 数据
            data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
            // break; // 如果只取第一张表，就取消注释这行
          }
        }
        // 最终获取到并且格式化后的 json 数据
        message.success('上传成功！')
        console.log(data);
      } catch (e) {
        // 这里可以抛出文件类型错误不正确的相关提示
        message.error('文件类型不正确！');
      }
    };
    // 以二进制方式打开文件
    fileReader.readAsBinaryString(files[0]);
  }
  render() {
    return (
      <div style={{ marginTop: 100 }}>
        <Button className={styles['upload-wrap']}>
          <Icon type='upload' />
          <input className={styles['file-uploader']} type='file' accept='.xlsx, .xls' onChange={this.onImportExcel} />
          <span className={styles['upload-text']}>上传文件</span>
        </Button>
        <p className={styles['upload-tip']}>支持 .xlsx、.xls 格式的文件</p>
      </div >
    );
  }
}

export default Excel;