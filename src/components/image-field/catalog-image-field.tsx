import * as React from 'react';
import { Option } from 'react-select';
import VirtualizedSelect from 'react-virtualized-select'
import { computed } from 'mobx';
import { observer } from 'mobx-react';

import { globalEditorStyles } from '../../style';
import { CatalogImage } from '../../models/catalog';
import { WorkflowStepSimple, Workflow } from '../../models/workflow';

import { CatalogSelect } from '../catalog-select';

@observer
export class CatalogImageField extends React.Component<{ catalog: CatalogImage[], workflow: Workflow, step: WorkflowStepSimple }, {}> {
    constructor(props: { catalog: CatalogImage[], workflow: Workflow, step: WorkflowStepSimple }) {
        super(props);
    }

    @computed
    private get tags() {
        let currentStep = this.props.step as WorkflowStepSimple;

        if (currentStep && currentStep.image && this.props.catalog) {
            let image = this.props.catalog.find(image => image.name === currentStep.image);
            if (image) {
                return image.tags.map(tag => ({ label: tag, value: tag }));
            }
        }

        return [];
    }

    private get tag() {
        if (this.props.step && (this.props.step as WorkflowStepSimple).tag) {
            return (this.props.step as WorkflowStepSimple).tag;
        }

        return '';
    }

    private onImageChange = (image: CatalogImage) => {
        this.props.step.image = image.name;
    }

    private onTagChange = (tag: string) => {
        (this.props.step as WorkflowStepSimple).tag = tag;
    }

    public render() {
        return (
            <div className="pure-g">
                <div className="pure-u-3-4">
                    <CatalogSelect 
                        catalog={this.props.catalog} 
                        value={this.props.step.image} 
                        onChange={this.onImageChange}>
                    </CatalogSelect>
                </div>
                <div className="pure-u-1-4">
                    <VirtualizedSelect
                        className={globalEditorStyles.largeSelect}
                        clearable={false}
                        options={this.tags}
                        optionHeight={100}
                        maxHeight={400}
                        onChange={option => this.onTagChange((option as Option).value as string)}
                        value={this.tag} />
                </div>
            </div>);
    }
}
