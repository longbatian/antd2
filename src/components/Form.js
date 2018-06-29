const AddMaintainPerson = Form.create()(React.createClass({
  getInitialState() {
    return {
      passwordDirty: false
    };
  },
  /**
   * 表单提交的内容
   * @param e
   */
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log(values);
        // console.log('Received values of form: ', values);
        var managerJson={
          "phone": values.phone,
          "email": values.email,
          "username": values.username,
          "password": values.password,
          "role":values.role
        };
        const {dispatch} = this.props;
        dispatch(fetchAddMaintain('token',managerJson));
        //提交成功之后清空数据
        this.props.form.resetFields();
      }
    });
  },
  /**
   *  获取密码框中鼠标的焦点
   * @param e
   */
  handlePasswordBlur(e) {
    const value = e.target.value;
    this.setState({ passwordDirty: this.state.passwordDirty || !!value });
  },
  /**
   *  验证两次输入的密码
   * @param rule
   * @param value
   * @param callback
   */
  checkPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入不一致！');
    } else {
      callback();
    }
  },
  /**
   *  验证密码是否为空
   * @param rule
   * @param value
   * @param callback
   */
  checkConfirm(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.passwordDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    //设置加载formItemLayout（输入框，单选按钮，多选框，进度条）的样式
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 9 }
    };
    //设置加载tailFormItemLayout（提交按钮）的样式
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 7
      }
    };
    //defaultValue={['唱歌']}  设置多选框的默认值
    return (
      <div className="body_div">
        <div className='module_header'>
          <div className='title'>
            添加人员
          </div>
        </div>
        <div className='module_content' style={{width:'70%'}}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="手机号"
            >
              {getFieldDecorator('phone', {
                rules: [{
                  required: true, message: '请输入您的手机号!'
                }]
              })(
                <Input className="content_style" addonBefore={<Icon type="mobile" />} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="邮箱"
              hasFeedback
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: '输入邮箱的类型错误'
                }, {
                  required: true, message: '请输入您的邮箱'
                }]
              })(
                <Input className="content_style" addonBefore={<Icon type="mail" />} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="账号"
            >
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入您的账号' }]
              })(
                <Input className="content_style" addonBefore={<Icon type="user" />} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="密码"
              hasFeedback
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: '请输入您的密码'
                }, {
                  validator: this.checkConfirm
                }]
              })(
                <Input className="content_style" addonBefore={<Icon type="lock" />} type="password" onBlur={this.handlePasswordBlur} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="确认密码"
              hasFeedback
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: '请在次输入您的密码'
                }, {
                  validator: this.checkPassword
                }]
              })(
                <Input className="content_style" addonBefore={<Icon type="lock" />} type="password" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="权限"
            >
              {getFieldDecorator('role',{
                rules: [{ required: true, message: '请选择您的权限' }]
              })(
                <RadioGroup className="content_style">
                  <Radio value="上传">上传</Radio>
                  <Radio value="审核">审核</Radio>
                  <Radio value="审核查询">审核查询</Radio>
                  <Radio value="统计查询">统计查询</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" size="large">提交</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}));

