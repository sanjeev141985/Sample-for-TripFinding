import React, { Component } from 'react';
import { Picker, Text, StyleSheet, Dimensions } from 'react-native';
import { Card, CardSection, Input, Button } from './Common';
import { connect } from 'react-redux';
import { EmployeeUpdate, EmplpyeeCreate } from '../actions';

class EmployeeCreate extends Component {

    onNameChanged(text) {
        console.log(text)
        this.props.EmployeeUpdate({ prop: 'name', value: text })
    }

    onCreateBtnPressed() {
        const { name, phone, shift } = this.props

        this.props.EmplpyeeCreate({ name, phone, shift: shift || 'Monday' })
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Sanjeev Sharma"
                        onChangeText={this.onNameChanged.bind(this)}
                        value={this.props.name}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Mobile"
                        placeholder="9999999999"
                        value={this.props.phone}
                        onChangeText={value => this.props.EmployeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={Styles.pickerLabelStyle}>
                        Shift
                    </Text>

                    <Picker
                        selectedValue={this.props.shift}
                        style={Styles.pickerStyle}
                        onValueChange={value => this.props.EmployeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>

                </CardSection>

                <CardSection>
                    <Button onPress={this.onCreateBtnPressed.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const Styles = StyleSheet.create(
    {
        pickerLabelStyle: {
            paddingLeft: 17,
            fontSize: 20
        },
        pickerStyle: {
            width: Dimensions.get('window').width,
        },

    }
);



const mapStateToProps = (state) => {
    const { name, phone, shift } = state.EmpForm;
    console.log(name);
    return { name, phone, shift };
}

export default connect(mapStateToProps, { EmployeeUpdate, EmplpyeeCreate })(EmployeeCreate);

