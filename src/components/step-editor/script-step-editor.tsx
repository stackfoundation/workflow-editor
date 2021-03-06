import * as React from 'react';
import * as ReactDOM from 'react-dom';
let injectSheet = require('react-jss').default;

// import { AceEditor } from '../ace-editor';

import { ImageField } from '../image-field/image-field';
import { WorkflowStep, WorkflowStepSimple, Workflow } from '../../models/workflow';

// import 'brace/theme/monokai';
// import 'brace/mode/sh';
import VirtualizedSelect, { VirtualizedOptionRenderOptions } from 'react-virtualized-select';

import { observer } from "mobx-react";
import { CustomInputIO } from "../../models/custom-input";
import { autorun } from "mobx";
import { CatalogImage } from "../../models/catalog";
import { ScriptEditorFactory, SfLinkFactory } from "../../models/state";
import { Option } from "react-select";
import { CenteredContent } from "../../util/centered-content";
import { translate } from '../../services/translation-service';
import { AdvancedOptions } from './advanced-options';
// const atom = require('atom');
import { editorStyles, themeColors, sectionStyles } from '../../style';
import { StepWorkflowVariables } from '../../components/step-editor/step-workflow-variables';


const styles = (theme: any) => {
    let section = sectionStyles(theme);

    return Object.assign({
        select: {
            composes: `${editorStyles.largeSelect}`
        },
        title: {
            composes: theme.ide ? 'text-color' : '',
            padding: 0,
            margin: 0,
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: '24px'
        },
        description: {
            composes: theme.ide ? 'text-color' : '',
            padding: 0,
            margin: 0,
            fontSize: '14px',
            lineHeight: '16px'
        },
        option: {
            cursor: 'pointer',
            margin: 0,
            padding: '0 20px'
        },
        selected: {
            composes: 'selected',
        },
        focused: {
            composes: 'focused',
        }
    }, section);
};

export interface ScriptStepEditorProps {
    step: WorkflowStepSimple,
    scriptField: string,
    workflow: Workflow,
    ide: boolean,
    includeWorkflowVariables?: boolean,
    catalog: CatalogImage[],
    scriptEditorFactory: ScriptEditorFactory,
    sfLinkFactory: SfLinkFactory,
    classes?: any
}

@injectSheet(styles)
@observer
export class ScriptStepEditor extends React.Component<ScriptStepEditorProps, {}> {
    private editorDiv: HTMLElement;
    private editorIO: CustomInputIO<string>;
    private stepScriptDisposer: Function;

    constructor(props: ScriptStepEditorProps) {
        super(props);
    }

    public render() {
        const classes = this.props.classes || {};
        return this.props.step ?
            <div className="pure-g">
                <div className="pure-u-1">
                    <ImageField
                        catalog={this.props.catalog}
                        ide={this.props.ide}
                        workflow={this.props.workflow}
                        step={this.props.step}></ImageField>
                </div>
                {this.props.includeWorkflowVariables && 
                    <div className="pure-u-1">
                        <StepWorkflowVariables step={this.props.step}/>
                    </div>}
                <AdvancedOptions
                    ide={this.props.ide}
                    step={this.props.step}
                    sfLinkFactory={this.props.sfLinkFactory} />
                <div className="pure-u-1">
                    <div className={classes.section}>
                        <div className={classes.sectionTitle}>{translate('LABEL_'+this.props.scriptField.toUpperCase())}:</div>
                        <div className={[classes.sectionBodyTight, classes.sectionBodyBorderless].join(' ')}>
                            {this.props.scriptEditorFactory(this.props.step, this.props.scriptField)}
                        </div>
                    </div>
                </div>
            </div>
            : null;
    }
}
