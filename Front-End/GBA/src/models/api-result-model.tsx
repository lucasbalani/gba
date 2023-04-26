export enum UpApiResultStatus {
    none = 0,
    loading = 1,
    success = 2,
    error = 3
}

export class UpApiResult{
    get status() {
        if (this._isLoading && !this._data && !this._errorMessage)
            return UpApiResultStatus.loading;

        if (!this._isLoading && this._isSuccess && this._data)
            return UpApiResultStatus.success;

        if (!this._isLoading && !this._isSuccess && this._errorMessage)
            return UpApiResultStatus.error;

        return UpApiResultStatus.none;
    };

    private _isLoading!: boolean;
    private _isSuccess!: boolean;

    private _data: any | null = null;
    get data() { return this._data };

    private _errorMessage: string | null = null;
    get errorMessage() { return this._errorMessage };

    static start(): UpApiResult{
        let apiResult = new UpApiResult()

        apiResult._isLoading = true;

        return apiResult;
    }

    static success<T>(data: T): UpApiResult {
        let apiResult = new UpApiResult()
        
        apiResult._isSuccess = true;
        apiResult._data = data;

        return apiResult;
    }

    static error(error: string): UpApiResult {
        let apiResult = new UpApiResult()

        apiResult._isSuccess = false;
        apiResult._errorMessage = error;
        
        return apiResult;
    }
}