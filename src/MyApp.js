import React, { Component } from 'react';
import Image from './Image';
import 'bulma/css/bulma.css';
import Columns from './Columns';

class MyApp extends Component {
    render() {
        return (
            <div >
                <h1>1111111111111111111111111</h1>
                <section className="sections">

                    <Columns class="columns">

                        <Columns class="column">
                            <Image src={require('./img/iphoneX.png')} alt="iphoneX" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/VivoV11.jpeg')} alt="VivoV11" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/oppo3s.png')} alt="oppo3s" />
                        </Columns>

                        <Columns class="column">
                            <Image src={require('./img/samsunggalaxynote9.png')} alt="samsunggalaxynote9" />
                        </Columns>

                    </Columns>


                </section>


            </div>

        );
    }
};
export default MyApp;