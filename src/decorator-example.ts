function loggedMethod(originalMethod: any, _context: any) {

    function replacementMethod(this: any, ...args: any[]) {
        console.log("LOG: Entering method.")
        const result = originalMethod.call(this, ...args);
        console.log("LOG: Exiting method.")
        return result;
    }

    return replacementMethod;
}

export class DatabaseTestService {
    @loggedMethod
    getUser(id: number, name: string) {
        console.log(`👤 Nutzer gefunden: ID=${id}, Name=${name}`);
        return { id, name };
    }
}


