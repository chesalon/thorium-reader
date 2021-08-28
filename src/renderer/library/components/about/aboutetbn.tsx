// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import * as React from "react";
import {
    TranslatorProps, withTranslator,
} from "readium-desktop/renderer/common/components/hoc/translator";
import LibraryLayout from "readium-desktop/renderer/library/components/layout/LibraryLayout";
import * as styles from "readium-desktop/renderer/assets/styles/myBooks.css";


// tslint:disable-next-line: no-empty-interface
interface IBaseProps extends TranslatorProps {
}
// IProps may typically extend:
// RouteComponentProps
// ReturnType<typeof mapStateToProps>
// ReturnType<typeof mapDispatchToProps>
// tslint:disable-next-line: no-empty-interface
interface IProps extends IBaseProps {
}

class aboutetbn extends React.Component<IProps, undefined> {

    constructor(props: IProps) {
        super(props);
    }

    public render(): React.ReactElement<{}>  {
        const { __ } = this.props;
        return (
            <LibraryLayout
                title={__("header.catalogs")}
            >
                <div className={styles.orgdiv}>{localStorage.getItem('orgName')}</div>
                
                <div className={styles.aboutdiv}>
                
                <p className={styles.aboutheading}>Version</p>
                <p>1.0.10</p>
                <p className={styles.aboutheading}>Copyright</p>
                <p>© 2021 Theological Book Network</p>
                <p>http://www.theologicalbooknetwork.org</p>
                <p className={styles.aboutheading}>Developed By</p>
                <p>Chesalon USA, Inc.</p>
                <p>http://www.chesalon.com</p>
                <img src="https://storage.googleapis.com/prothumia/repfr.png" alt="eTBN" width="431px" height="184px"/></div>
            </LibraryLayout>
            
        );
    }
}

export default withTranslator(aboutetbn);
