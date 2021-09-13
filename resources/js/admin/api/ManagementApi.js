import Api from "./Api.js";

export default {
    lists() {
        return Api().get("/management/list");
    },
    show(softwareteam_id) {
        return Api().get(`management/show/${softwareteam_id}`);
    },
    store(form) {
        return Api().post("management/store", form);
    },
    update(form, softwareteam_id) {
        return Api().post(`management/update/${softwareteam_id}`, form);
    },
    delete(softwareteam_id) {
        return Api().delete(`/management/delete/${softwareteam_id}`);
    },
};
