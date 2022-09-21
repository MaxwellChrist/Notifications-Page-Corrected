function markAllAsRead(): void {
    let activeClasses: NodeList = document.querySelectorAll(".notification-body-container") as NodeList
    let activeIcons: NodeList = document.querySelectorAll(".notification-read-toggle") as NodeList

    let newActiveClasses: HTMLDivElement[] = Array.from(activeClasses) as HTMLDivElement[]
    let newActiveIcons = Array.from(activeIcons) as HTMLDivElement[]

    toggleList(newActiveClasses)
    toggleList(newActiveIcons)
}

function toggleList(list: HTMLDivElement[]): void {
    let classMod = (list.length > 3) ? "active" : "notification-read-toggle-disable"
    list.forEach((item: HTMLElement, index: number): void => {
        if (item.classList.contains(classMod)) {
            item.classList.remove(classMod)
        } else if (index <= 2) {
            item.classList.add(classMod)
        }
    })
}