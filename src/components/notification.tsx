import React, {Component} from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import {connect} from "react-redux";
import {IAppState} from "../store";
import {NotificationType} from "../store/notifications/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/free-solid-svg-icons'

type PropsType = {
    notifications: NotificationType[]
};

class NotificationClass extends Component<PropsType> {
    state = {
        dropdownOpen: false
    };

    constructor(props: PropsType) {
        super(props);

        this.toggle = this.toggle.bind(this);

    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render(): React.ReactNode {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle
                    tag="button"
                    onClick={this.toggle}
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}
                >
                    <FontAwesomeIcon icon={faBell} />
                </DropdownToggle>
                <DropdownMenu>
                    {this.props.notifications.map(e => <div>{e.title}</div>)}
                </DropdownMenu>
            </Dropdown>
        );
    }
}

const mapStateToProps = (state: IAppState): PropsType => {
    return {
        notifications: state.notifications.notifications
    };
};

export const Notification = connect(mapStateToProps, null)(NotificationClass);