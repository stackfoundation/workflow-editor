import { setTimeout } from 'timers';
import * as React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
let injectSheet = require('@tiagoroldao/react-jss').default;

import { CatalogImage } from '../../models/catalog';
import {
    Workflow,
    WorkflowStep,
    WorkflowStepCompound,
    WorkflowStepSimple,
} from '../../models/workflow';
import { EditorState, ScriptEditorFactory } from '../../models/state';
import { WorkflowService } from '../../services/workflow_service';
import { StepTypeSelect } from '../step-type-select';
import { SimpleStepEditor } from './simple-step-editor';
import { CenteredContent } from '../../util/centered-content';
import { ChangeEvent } from 'react';
import { FormReactComponent } from '../../../../../react-forms/validating-react-component';
import { Field } from "../../../../../react-forms/field";
import { StepType } from "../../../../workflow";

export interface WorkflowStepTypeChangeEvent {
    step: WorkflowStep;
    type: string;
};

interface StepEditorProps {
    state: EditorState,
    ide: boolean,
    step: WorkflowStep,
    workflow: Workflow,
    catalog: CatalogImage[],
    scriptEditorFactory: ScriptEditorFactory,
    classes?: any
}

const styles = (theme: any) => ({
    form: {
        composes: theme.ide ? '' : 'pure-form pure-form-stacked',
    },
    stepNameInput: {
        composes: 'pure-u-1 input-text native-key-bindings',
        height: '100%',
        margin: '0 !important',
        'border-right': 'none',
        'border-top-right-radius': '0',
        'border-bottom-right-radius': '0',
    },
    stepTypeInputDiv: {
        composes: 'pure-u-1 pure-u-md-5-12 step-type-input',

        '& .Select-control': {
            'border-top-left-radius': '0',
            'border-bottom-left-radius': '0',
        }
    }
});

@injectSheet(styles)
@observer
export class StepEditor extends FormReactComponent<StepEditorProps, {}> {
    private nameField: Field;

    constructor(props: StepEditorProps) {
        super(props);

        this.nameField = this.createField('props.step.name', value => {
            let errors: string[] = [],
                stepFoundPos = this.props.workflow.findStep(step => step.name === value);

            if (!value || value.length === 0) {
                errors.push('requiredField');
            }
            if (stepFoundPos && stepFoundPos.parent.steps[stepFoundPos.index] !== this.props.step) {
                errors.push('nameConflict');
            }

            return errors;
        });
    }

    public render() {
        return (
            <form className={this.props.classes.form}>
                <fieldset>
                    <div className="pure-g block">
                        <label className="pure-u-1-12 text-right">
                            <CenteredContent>Step:</CenteredContent>
                        </label>
                        <div className="pure-u-11-12 pure-u-md-1-2">
                            <input type="text"
                                className={this.props.classes.stepNameInput}
                                name="name"
                                value={this.nameField.fieldVal || ''} onChange={e => this.onNameChange(e)} />
                        </div>
                        <div className={this.props.classes.stepTypeInputDiv}>
                            <StepTypeSelect
                                type={(this.props.step && this.props.step.type || WorkflowStepSimple.name)}
                                onChange={this.onTypeChange}></StepTypeSelect>
                        </div>
                    </div>
                    {this.props.step && this.props.step.type === 'compound' ?
                        null :
                        (<SimpleStepEditor
                            scriptEditorFactory={this.props.scriptEditorFactory}
                            workflow={this.props.workflow}
                            ide={this.props.ide}
                            catalog={this.props.catalog}
                            step={this.props.step as WorkflowStepSimple}>
                        </SimpleStepEditor>)}
                </fieldset>
            </form>);
    }

    private onTypeChange = (type: StepType) => {
        this.props.state.changeCurrentStepType(type);
    }

    @action
    private onNameChange(event: ChangeEvent<HTMLInputElement>) {
        this.updateField(this.nameField, event.target.value);
    }
}