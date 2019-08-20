/**
|--------------------------------------------------
| Interfaces
|--------------------------------------------------
*/

export interface IPageProps {
	title: string;
	questions: object[];
}

export interface IPage {
	id: string;
	isRandomized: boolean;
	legacyId: number;
	pageType: string;
	priority: number;
	questions: Array<IQuestion>;
	title: string;
}

export interface IQuestion {
	hasPrepopulatedData: boolean;
	id: string;
	isLocked: boolean;
	isMandatory: boolean;
	legacyId: number;
	priority: number;
	questionId: string;
	questionLevel: string;
}

export interface IPageState {
	pages: IPage[];
}

export interface IPageState {
	responsesState: Array<IResponses>;
}

export interface IResponses {
	responses: object[];
	questionTitle: string;
	questionTypeCode: string;
}

export interface ISurveyResponseProps {
	match: {
		params: {
			surveyId_txt: string;
		};
	};
	location: {
		state: {
			title: string;
		};
	};
}
