import "reflect-metadata";
import Container from "typedi";
import { HomePageService } from "./home-page.service";
import { PERMISSON_TOKEN } from "../../framework/permission/permission-token";
import { PermissionFake1Service } from "../../framework/permission/permission-fake1.service";
import { PermissionFake2Service } from "../../framework/permission/permission-fake2.service";
// import { PermissionFake2Service } from "../../framework/permission/permission-fake2.service";

describe("HomePageService", () => {

    beforeEach(() => {
        Container.reset();
    });

    describe("getModel", () => {

        it("should be called without error", () => {
            // ARANGE
            Container.set({ id: PERMISSON_TOKEN, type: PermissionFake1Service });
            const homePageService = Container.get(HomePageService);

            // ACT
            let hasError = false;
            try {
                homePageService.getModel();
            } catch (error) {
                hasError = true;
            }

            // ASSERT
            expect(hasError).toBe(false);
        });

        describe("when permission service is PermissionFake1Service and all is allowed", () => {

            it("should return a model with name, text and age", () => {
                // ARANGE

                Container.set({ id: PERMISSON_TOKEN, type: PermissionFake1Service });
                const homePageService = Container.get(HomePageService);

                // ACT
                const model = homePageService.getModel();

                // ASSERT
                expect(model.name?.length).toBeGreaterThan(0);
                expect(model.text?.length).toBeGreaterThan(0);
                expect(model.age).toBeGreaterThan(0);
                expect(model.showAge).toBe(true);
            });
        });

        describe("when permission service is PermissionFake2Service and nothing is allowed", () => {

            it("should return a model with undefined age", () => {
                // ARANGE
                Container.remove(PERMISSON_TOKEN);
                Container.set({ id: PERMISSON_TOKEN, type: PermissionFake2Service });
                const homePageService = Container.get(HomePageService);

                // ACT
                const model = homePageService.getModel();

                // ASSERT
                expect(model.age).toBeUndefined();
            });
        });
    });
});