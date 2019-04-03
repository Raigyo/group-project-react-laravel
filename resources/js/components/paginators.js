
import React, {Component} from 'react';
import {Paginator} from 'primereact/paginator';

export class PaginatorDemo extends Component {

    constructor() {
        super();
        this.state = {
            first: 0, 
            rows: 10, 
            first2: 0, 
            rows2: 10
        };
        
        this.onPageChange = this.onPageChange.bind(this);
        this.onPageChange2 = this.onPageChange2.bind(this);
    }

    onPageChange(event) {
        this.setState({
            first: event.first,
            rows: event.rows
        });
    }

    onPageChange2(event) {
        this.setState({
            first2: event.first,
            rows2: event.rows
        });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Paginator</h1>
                        <p>Paginator is a generic widget to display content in paged format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Custom Template</h3>
                    <Paginator first={this.state.first2} rows={this.state.rows2} totalRecords={120} rowsPerPageOptions={[10,20,30]} onPageChange={this.onPageChange2}
                        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>
                </div>
            </div>
        );
    }
}